class Api::SongsController < ApplicationController
  def index
    if params[:query] == ""
      @songs = {}
    elsif params[:query]
      @songs = Song.where('lower(title) LIKE ?', "%#{params[:query].downcase}%")
    else
      @songs = {}
    end

  end


end
