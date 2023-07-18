bucket = "whatsnxt-terraform-states"
key    = "terraform.tfstate"
region = "ap-south-1"
encrypt = true
dynamodb_table = "terraform-locks"