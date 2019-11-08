require 'sinatra/base'

class MakersBNB < Sinatra::Base

  get '/' do
    erb (:index)
  end

  get '/list_space' do
    erb (:list_space)
  end

  post '/' do
    'Thank you for listing your space!'
  end

  get '/hire_space' do
    erb (:hire_space)
  end

  get '/sign_up' do
    erb (:sign_up)
  end

  post '/sign_up' do
    'Thank you for signing up!'
  end

end
