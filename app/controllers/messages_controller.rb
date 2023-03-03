class MessagesController < ApplicationController

    def index
        messages = Message.all 
        render json: messages
    end

    def create
        # message_params = params.require(:message).permit(:name, :email, :message)
        message = Message.new(message_params)
        message.save

        if message.valid?
            render json: { message: "Message sent successfully" }, status: :ok
        else
            render json: { error: "Failed to send message" }, status: :unprocessable_entity
        end
    
    end
    


private #########################################################################
    
    def message_params
        # params.require(:message).permit(:message, :email, message_attributes: [:full_name][:email][:message])
        params.require(:message).permit(:full_name, :email, :message)

    end        

    end

























        
#     def create
#         message = Message.new(message_params)
#         if message.save
#         # Do something after the message is saved, such as sending an email notification
#             render json: message
#         else
#             render json: {error: 'There was an error sending your message. Please try again.'}, status: :unprocessable_entity 
#         end 
# end

# private################################################################################################################################
#     def message_params
#         params.permit(:full_name, :email, :message)
#     end
# end



# def create
#     message_params = params.require(:message).permit(:name, :email, :message)
#     # add _json and message to the permitted parameters
#     form_params = params.permit(:name, :email, :message)
    
#     # process the JSON data
#     json_data = json_params[:_json]
#     # do something with the message parameter, if needed
#     message_data = json_params[:message]
    
#     # create a new message with the permitted parameters
#     @message = Message.new(form_params)
    
#     if @message.save
#             render json: { message: "Message sent successfully" }, status: :ok
#     else
#         render json: { error: "Failed to send message" }, status: :unprocessable_entity
#     end
# end

# private #########################################################################


# def message_params
#     params.permit(:full_name, :email, :message)
# end

# end