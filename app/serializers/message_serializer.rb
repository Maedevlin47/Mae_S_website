class MessageSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :message
end
