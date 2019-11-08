# frozen_string_literal: true

require 'sinatra/base'

# controller for Airport sinatra app
class Airport < Sinatra::Base
  set :static, true
  set :public_folder, (proc { File.join(root, 'interface') })

  get '/' do
    erb :index
  end
end
