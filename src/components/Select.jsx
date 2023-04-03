import React from 'react';
import {Language as LanguageIcon} from "@mui/icons-material";


function Select(props) {
    return (<span className="bg-[#101010] border-[#525353] border-2 rounded text-white p-2 inline-flex gap-2">
                    <LanguageIcon/>
                    <select name="language" className="bg-transparent w-20">
                        <option value="uz">Uzbek</option>
                        <option value="ru">Russian</option>
                    </select>
                </span>
    );
}

export default Select;