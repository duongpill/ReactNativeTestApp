/**
 * @format
 */

import { BackHandler, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {describe, expect, it, jest, test} from '@jest/globals';

import Header from '../src/presentation/components/Header';
import { act, fireEvent, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';

import { API } from '../src/utils/Constants';
import Home from '../src/presentation/Home';

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
      ...actualNav,
      useNavigation: () => ({ 
          navigate: jest.fn(),
          dispatch: jest.fn(),
          goBack: mockedDispatch,
      }),
  };
});

test('Header renders correctly', async () => {
  const header = render(<Header/>);
  await waitFor(() => { 
    expect(header).toMatchSnapshot();
  });
});

test('Home renders correctly', async () => {
  const home = render(<Home />);
  await waitFor(() => { 
    expect(home).toMatchSnapshot();
  });
});

describe('Header back button', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it("Header back button press", () => {
    const { getByTestId } = render(<Header />);  
  
    const button = getByTestId('headerBackButton')
    
    fireEvent.press(button);

    expect(button).toBeOnTheScreen();
    expect(mockedDispatch).toHaveBeenCalledTimes(1);
  });
});

describe('Try to fetch posts', () => {

  const getProducts = async () => {
    var url = `${API.url}/v1.2/posts?username_or_id_or_url=mrbeast`;
    const options = {
      method: 'GET',
      headers: API.headers
    };
    const res = await fetch(url, options);
    const text = await res.text();
    return text ? JSON.stringify(text) : [];
  }
  
  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve(new Response()));
  })

  afterAll(() => {
    global.fetch = unmockedFetch;
  })

  test('getPost success', async () => {
    const result = await getProducts();
    expect(Array.isArray(result)).toEqual(true);
  })

  test('getPost fails', async () => {
    const result = await getProducts();
    expect(result.length).toEqual(0);
  })
});