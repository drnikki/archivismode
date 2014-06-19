class BoxesController < ApplicationController
  before_action :set_box, only: [:show, :edit, :update, :destroy]

  before_filter :load_image

  # GET /boxes
  # GET /boxes.json
  def index
     @boxes = @image.boxes
  end

  # GET /boxes/1
  # GET /boxes/1.json
  def show
    @box = @image.boxes.find(params[:image_id])
  end

  # GET /boxes/new
  def new
    @box = @image.boxes.new
  end
  # http://stackoverflow.com/questions/14762418/routing-nested-resources-and-matching-controller
  # GET /boxes/1/edit
  def edit
      @box = @image.boxes.find(params[:image_id])
  end

  # POST /boxes
  # POST /boxes.json
  def create
    @box = @image.boxes.new(box_params)

    respond_to do |format|
      if @box.save
        format.html { redirect_to [@image, @box], notice: 'Box was successfully created.' }
        format.json { render :show, status: :created, location: @box }
      else
        format.html { render :new }
        format.json { render json: @box.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /boxes/1
  # PATCH/PUT /boxes/1.json
  def update
    respond_to do |format|
      if @box.update(box_params)
        format.html { redirect_to [@image, @box], notice: 'Box was successfully updated.' }
        format.json { render :show, status: :ok, location: @box }
      else
        format.html { render :edit }
        format.json { render json: @box.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /boxes/1
  # DELETE /boxes/1.json
  def destroy
    @box.destroy
    respond_to do |format|
      format.html { redirect_to image_box_url, notice: 'Box was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_box
      @box = Box.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def box_params
      params.require(:box).permit(:x_start, :x_end, :y_start, :y_end)
    end

    # load the parent... from https://gist.github.com/jhjguxin/3074080
    def load_image
      @image = Image.find(params[:image_id])
    end

end
