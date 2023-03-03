class Message < ApplicationRecord
    
    validates :full_name, presence: true
    validates :email, presence: true
    validates :message, presence: true

    attribute :created_at, :datetime, default: -> { Time.current }

end
