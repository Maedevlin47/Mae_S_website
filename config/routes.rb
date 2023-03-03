Rails.application.routes.draw do
  resources :messages, only: [:create, :index]


  # post "/messages", to: "messages#create"


end
