class Api::SongVotesController < ApplicationController
  def create
    @vote = SongVote.new(vote_type: params[:type].to_i, user_id: params[:user_id], playlist_id: params[:playlist_id], song_id: params[:song_id])
    if @vote.save
      render :show
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def update

  end

  def index
    @songvotes = SongVote.where(user_id: params[:user_id], playlist_id: params[:playlist_id], song_id: params[:song_id])
    render :index
  end
end
