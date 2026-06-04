terraform {

  backend "s3" {

    bucket = "northpeak-terraform-state"

    key = "prod/terraform.tfstate"

    region = "us-east-1"
  }
}