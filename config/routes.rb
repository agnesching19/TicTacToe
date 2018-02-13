Rails.application.routes.draw do
  root to: "games#home"
  resources :games, except: [:destroy]
  # get '/new',  to: 'games#new'
  # get '/show', to: 'games#show'
end
