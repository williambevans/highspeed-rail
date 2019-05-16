import React from "react";
import { Input, TextArea, FormBtn } from "./Form";

function MessageForm() {
    return (
        <div>
            <div>
                <div className="familyHome">
                    <form>
                        <Input
                        name="address"
                        placeholder="Address (required)"
                        />
                        <Input
                        name="zip"
                        placeholder="Zip (required)"
                        />
                        <TextArea
                        name="message"
                        placeholder="Your message here... (Required)"
                        />
                        <FormBtn>
                        Submit
                        </FormBtn>
            </form>
                </div>
            </div>
        </div>
    );
}

export default MessageForm;