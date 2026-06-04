resource "aws_autoscaling_group" "web_asg" {

  name = "northpeak-asg"

  min_size         = 2
  desired_capacity = 2
  max_size         = 4

  target_group_arns = [
    aws_lb_target_group.web_tg.arn
  ]

  vpc_zone_identifier = [
    aws_subnet.public_1.id,
    aws_subnet.public_2.id
  ]

  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }

  health_check_type = "EC2"

  tag {
    key                 = "key1"
    value               = "northpeak-instance"
    propagate_at_launch = true
  }
}