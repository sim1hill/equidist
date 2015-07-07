class MapController < ApplicationController


  def index
     
  #   respond_to do |format|
  #   binding.pry
  #   format.js
  # end

  end

def get_map
    # @marker = [40.7048872,-74.0123737]
    # # @marker = [request.location.latitude, request.location.longitude]
    # respond_to do |format|
    #   format.json {render :marker}
    # end
end

def create
  respond_to do |format|
    binding.pry
    format.js
  end
end


end
