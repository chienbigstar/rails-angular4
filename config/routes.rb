Rails.application.routes.draw do
  root "pages#index"
  namespace :api do
    resources :heroes, only: :index
  end
  get "*path", to: "pages#index"
end
