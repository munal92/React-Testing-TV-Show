import React from 'react';

import {render, queryAllByText} from '@testing-library/react';

import Episodes from "./Episodes";


test("render Episodes with valid episodes", ()=> {
    //const mockData = [{}];
    const mockData = [{season:'s1', number:'Movie season one'}];
    const {queryAllByText,rerender} = render(<Episodes episodes={[]}/>)
   // const allEpisodes = queryAllByText(/episodes/i);
    let allEpisodes = queryAllByText(/season/i);
    // expect (allEpisodes).toHaveLength(0);
    // expect (allEpisodes).toStrictEqual([]);

    rerender(<Episodes episodes={mockData}/>) 
    allEpisodes = queryAllByText(/season/i)
    expect(allEpisodes).toHaveLength(1)
    
})

