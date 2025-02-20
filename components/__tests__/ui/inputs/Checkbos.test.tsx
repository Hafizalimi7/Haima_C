import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { icons } from '@/constants';
import Checkbox from '@/components/ui/inputs/Checkbox';

describe('Checkbox Component', () => {
  const mockOnPress = jest.fn();
  const defaultProps = {
    checked: false,
    onPress: mockOnPress,
    className: 'test-class'
  };

  beforeEach(() => {
    // Clear mock function calls before each test
    mockOnPress.mockClear();
  });

  it('renders correctly when unchecked', () => {
    const { getByTestId } = render(
      <Checkbox {...defaultProps} testID="checkbox" />
    );

    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeTruthy();
  });

  it('renders correctly when checked', () => {
    const { getByTestId } = render(
      <Checkbox {...defaultProps} checked={true} testID="checkbox" />
    );

    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeTruthy();
  });

  it('calls onPress handler when pressed', () => {
    const { getByTestId } = render(
      <Checkbox {...defaultProps} testID="checkbox" />
    );

    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('displays correct icon when unchecked', () => {
    const { UNSAFE_getByProps } = render(
      <Checkbox {...defaultProps} testID="checkbox" />
    );

    const image = UNSAFE_getByProps({ source: icons.checkedBoxIcon });
    expect(image).toBeTruthy();
    expect(image.props.resizeMode).toBe('contain');
    expect(image.props.className).toBe('w-4 h-4');
  });

  it('displays correct icon when checked', () => {
    const { UNSAFE_getByProps } = render(
      <Checkbox {...defaultProps} checked={true} testID="checkbox" />
    );

    const image = UNSAFE_getByProps({ source: icons.checkboxIcon });
    expect(image).toBeTruthy();
    expect(image.props.resizeMode).toBe('contain');
    expect(image.props.className).toBe('w-4 h-4');
  });
});