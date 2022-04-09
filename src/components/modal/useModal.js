import { useState } from 'react';

const useModal = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [eventValue, setEventValue] = useState(null)
    const [eventId, setEventId] = useState(null)
    const [eventIndex, setEventIndex] =useState(null)
    const [eventWrapper, setEventWrapper] =useState(null)
    function toggleModal(itemContent, itemId, index, wrapper) {
        setIsVisible(!isVisible)
        setEventValue(itemContent)
        setEventId(itemId)
        setEventIndex(index)
        setEventWrapper(wrapper)
    }
    return {
        isVisible,
        toggleModal,
        eventIndex,
        eventValue,
        eventId,
        eventWrapper
    }
};

export default useModal;