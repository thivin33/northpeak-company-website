data "aws_ami" "ubuntu" {

  most_recent = true

  owners = ["099720109477"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_launch_template" "web" {

  name_prefix = "northpeak-"

  image_id = data.aws_ami.ubuntu.id

  instance_type = "t3.micro"

  key_name = "key1"

  vpc_security_group_ids = [
    aws_security_group.web_sg.id
  ]

  user_data = base64encode(
    file("${path.module}/user-data.sh")
  )

  tag_specifications {

    resource_type = "instance"

    tags = {
      Name = "northpeak-web"
    }
  }
}