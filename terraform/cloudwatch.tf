resource "aws_cloudwatch_metric_alarm" "high_cpu" {

  alarm_name = "northpeak-high-cpu"

  comparison_operator = "GreaterThanThreshold"

  evaluation_periods = 2

  metric_name = "CPUUtilization"

  namespace = "AWS/EC2"

  period = 300

  statistic = "Average"

  threshold = 70

  alarm_description = "CPU above 70 percent"

  dimensions = {
    AutoScalingGroupName = aws_autoscaling_group.web_asg.name
  }
  alarm_actions = [
  aws_sns_topic.alerts.arn
]
}

resource "aws_cloudwatch_dashboard" "main" {

  dashboard_name = "northpeak-dashboard"

  dashboard_body = jsonencode({

    widgets = [

      {
        type = "metric"

        width = 12

        height = 6

        properties = {

          metrics = [
            ["AWS/EC2", "CPUUtilization"]
          ]

          period = 300

          stat = "Average"

          region = "ap-south-1"

          title = "EC2 CPU Usage"
        }
      }
    ]
  })
}

resource "aws_cloudwatch_metric_alarm" "instance_health" {

  alarm_name = "northpeak-instance-health"

  comparison_operator = "GreaterThanThreshold"

  evaluation_periods = 1

  metric_name = "StatusCheckFailed"

  namespace = "AWS/EC2"

  period = 300

  statistic = "Maximum"

  threshold = 0

  dimensions = {
    AutoScalingGroupName = aws_autoscaling_group.web_asg.name
  }

  alarm_actions = [
    aws_sns_topic.alerts.arn
  ]
}