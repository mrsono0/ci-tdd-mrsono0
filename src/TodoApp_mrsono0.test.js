import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp_mrsono0 from './TodoApp_mrsono0';

describe('<TodoApp_mrsono0 />', () => {
    it('renders TodFrom TodoList', () => {
        const { getByText, getByTestId } = render(<TodoApp_mrsono0 />);
        getByText('등록'); // TodoForm 화면에 있는지 확인
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인
    });
});