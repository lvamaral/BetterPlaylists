class Api::SongsController < ApplicationController
  def index
    if params[:query] == ""
      @songs = Song.all
    elsif params[:query]
      @songs = Song.where('lower(title) LIKE ? OR lower(artist) LIKE ?', "%#{params[:query].downcase}%","%#{params[:query].downcase}%")
    else
      @songs = Song.all
    end

  end


end
