Rails.application.routes.draw do
  root to: "games#home"
  get 'new_game', to: 'games#new_game'
  resources :games, except: [:destroy]
  # get '/new',  to: 'games#new'
  # get '/show', to: 'games#show'
end
