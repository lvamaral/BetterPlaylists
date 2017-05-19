class Api::SongsController < ApplicationController
  def index
    if params[:query]
      @songs = Song.where('lower(title) LIKE ?', "%#{params[:query].downcase}%")
    else
      @songs = Song.all
    end
  end


end
