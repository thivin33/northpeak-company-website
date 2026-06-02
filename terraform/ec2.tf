resource "aws_instance" "test" {

  ami = data.aws_ami.ubuntu.id

  instance_type = "t3.micro"

  subnet_id = aws_subnet.public_1.id

  vpc_security_group_ids = [
    aws_security_group.web_sg.id
  ]

  key_name = "key1"

  user_data = file("${path.module}/user-data.sh")
}