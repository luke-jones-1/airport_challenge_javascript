require 'sinatra/base'

class Airport < Sinatra::Base

  get '/' do
    erb (:index)
  end

end
