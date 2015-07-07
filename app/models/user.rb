class User < ActiveRecord::Base
  has_many :groups, through: :user_groups
end
