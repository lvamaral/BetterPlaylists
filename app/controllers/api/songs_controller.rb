class Api::SongsController < ApplicationController
  def index
    if params[:query]
      @songs = Song.where('lower(title) LIKE ?', "%#{params[:query].downcase}%")
      p @songs
    else
      @songs = Song.all
    end
  end


end
