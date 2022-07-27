import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park Bench',
    category: 'landscape',
    description: 'jibber jabber',
    index: 1
};

afterEach(cleanup)

describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
          />);
    });

    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
            
            // Assert the match
        expect(asFragment()).toMatchSnapshot()
    });
});

describe('Click Event', () => {
    // Arrange: Render Modal
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      // Act: Simulate click event
      fireEvent.click(getByText('Close this modal'));
        
      // Assert: Expected matcher
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  })  

