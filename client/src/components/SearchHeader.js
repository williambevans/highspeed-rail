import React from "react";
import "../styles/SearchHeader.css";
import { Input, FormBtn } from "./Form";

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
