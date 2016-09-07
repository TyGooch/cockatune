class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(id: params[:id])
  end
  
  def create
		# debugger
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :profile_picture_url)
	end
end
