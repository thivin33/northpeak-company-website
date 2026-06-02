provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "terraform_state" {

  bucket = "northpeak-terraform-state-123456"

  tags = {
    Name = "terraform-state"
  }
}