bucket                      = "terraform-states"
key                         = "ci-cd-example.tfstate"
region                      = "eu-central-1"
encrypt                     = true
dynamodb_table              = "terraform-locks"