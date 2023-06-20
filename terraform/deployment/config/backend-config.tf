bucket = "skillaro-terraform-states"
key = "deployment/terraform.tfstate"
region = "ap-south-1"
encrypt = true
dynamodb_table = "terraform-locks"