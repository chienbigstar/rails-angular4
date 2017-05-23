Rails.application.routes.draw do
  root "pages#index"
  namespace :api do
    resources :heroes, only: [:index, :show]
  end
  get "*path", to: "pages#index"
end
