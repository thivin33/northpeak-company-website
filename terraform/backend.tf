terraform {

  backend "s3" {

    bucket = "northpeak-terraform-state-123456"

    key = "prod/terraform.tfstate"

    region = "us-east-1"
  }
}