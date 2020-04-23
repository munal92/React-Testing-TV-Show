import React from "react";
import {render, fireEvent, waitFor} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow';

import App from './App';




jest.mock("./api/fetchShow")
//console.log("mockFetch",mockFetchShow)

test("App fetches episodes data and render", async () => {
    //mock fetch shows
    const mockData = {season:'s1', number:'Movie season one',name:"Avengers"};
    mockFetchShow.mockResolvedValueOnce(mockData); //Do one time that call 
    // expect(0).toBe(0);
   // render(<App/>)
   const {queryAllByText} = render(<App/>)
   await waitFor(() => expect(queryAllByText(/Avengers/i)).toHaveLength(0))
})