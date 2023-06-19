bucket = "skillaro-terraform-states"
key = "ci-cd-example.tfstate"
region = "skillaro-terraform-states"
encrypt = true
dynamodb_table = "terraform-locks"
role_arn = "arn:aws:iam::516666139624:role/git_admin_role"