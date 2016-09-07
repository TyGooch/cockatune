Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resources :users, only: [:index]
    resource :session, only: [:create, :destroy, :show]
    resources :artists, only: [:index, :show]
  end

  root "static_pages#root"
end
