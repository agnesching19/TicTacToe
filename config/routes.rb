Rails.application.routes.draw do
  get 'new', to: 'games#new'

  root to: "games#start_game"
end
