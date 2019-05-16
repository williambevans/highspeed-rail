import React from "react";
import "../styles/SearchHeader.css";
import { Input, TextArea, FormBtn } from "../components/Form";

function SearchHeader() {
    return (
        <div>
            <div className="searchHeader">
                <div className="familyHome">
                    <p className="siteTitle">
                        Is your family affected?
                    </p>
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
                        value={this.state.synopsis}
                        onChange={this.handleInputChange}
                        name="message"
                        placeholder="Synopsis (Optional)"
                        />
                        <FormBtn>
                        Search Property
                        </FormBtn>
            </form>
                </div>
            </div>
        </div>
    );
}

export default SearchHeader;
