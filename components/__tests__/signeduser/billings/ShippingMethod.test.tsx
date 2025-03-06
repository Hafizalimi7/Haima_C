import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useShipping } from '@/contexts/ShippingProvider';
import { ShippingMethod } from '@/components/signeduser/billings';
import { ShippingMethodType } from '@/components/signeduser/billings/ShippingMethod';

jest.mock('@/contexts/ShippingProvider', () => ({
    useShipping: jest.fn()
}));

describe('ShippingMethod', () => {
    const mockSetSelectedMethod = jest.fn();
    
    beforeEach(() => {
        (useShipping as jest.Mock).mockReturnValue({
            setSelectedMethod: mockSetSelectedMethod,
            selectedMethod: null
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders shipping method options correctly', () => {
        const { getByText } = render(<ShippingMethod />);
        
        expect(getByText('Choose shipping method')).toBeTruthy();
        expect(getByText('Ship to pick-up location')).toBeTruthy();
        expect(getByText('Home Delivery')).toBeTruthy();
    });

    it('calls setSelectedMethod when an option is selected', () => {
        const { getByText } = render(<ShippingMethod />);
        
        fireEvent.press(getByText('Ship to pick-up location'));
        expect(mockSetSelectedMethod).toHaveBeenCalledWith(ShippingMethodType.PICKUP_LOCATION);

        fireEvent.press(getByText('Home Delivery'));
        expect(mockSetSelectedMethod).toHaveBeenCalledWith(ShippingMethodType.HOME_DELIVERY);
    });
});