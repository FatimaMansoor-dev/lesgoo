import { useEffect, useRef, useState } from 'react';
import Sortable from 'sortablejs';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

interface Item {
  id: number;
  type: 'global' | 'email' | 'phone';
  value: string;
}

const ContactDetails = () => {
  const [addNewModal, setAddNewModal] = useState(false);
  const [items, setItems] = useState<Item[]>([
    { id: 1, type: 'global', value: 'www.therenewcenter.com' },
    { id: 2, type: 'email', value: 'info@therenewcenter.com' },
    { id: 3, type: 'phone', value: '800-509-0244' },
    { id: 4, type: 'email', value: 'info@therenewcenter.com' },
  ]);
  const contactTypes = [
    { type: 'email', label: 'Email Address' },
    { type: 'global', label: 'Website' },
    { type: 'phone', label: 'Phone number' },
  ];

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const sortable = Sortable.create(listRef.current, {
      handle: '.drag-handle',
      animation: 150,
      onEnd: evt => {
        const oldIndex = evt.oldIndex as number;
        const newIndex = evt.newIndex as number;

        if (oldIndex == null || newIndex == null) return;

        setItems(prevItems => {
          const updatedItems = [...prevItems];
          const [movedItem] = updatedItems.splice(oldIndex, 1);
          updatedItems.splice(newIndex, 0, movedItem);
          return updatedItems;
        });
      },
    });

    return () => sortable.destroy();
  }, []);

  const addNewItem = (type: 'global' | 'email' | 'phone') => {
    setItems(prevItems => [...prevItems, { id: Date.now(), type, value: '' }]);
    setAddNewModal(false);
  };

  const saveItems = () => {
    const updatedItems = items.map((item, index) => ({ ...item, id: index + 1 }));
    setItems(updatedItems);
    // console.log('contactDetails', updatedItems);
  };

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out font-['Urbanist']">
      <div className="mb-9 w-full max-w-[375px] pt-[14px]">
        <h2 className="mb-[17px] text-[22px] font-semibold text-center leading-[26px]">
          Contact Details
        </h2>
        <div className="bg-[#FBFBFB] p-[39px_25px]">
          <div>
            <p className="text-[#00000080] text-[12px] font-medium leading-[14px] mb-[18px] text-center">
              Drag and drop to change order
            </p>
            <div className="flex flex-col gap-6" ref={listRef}>
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-[9px]">
                  <Image
                    src={`${imageDomainUrl}/Profile/Icon/drag-dot.svg`}
                    alt="drag-dot"
                    height={18}
                    width={18}
                    className="cursor-grab drag-handle"
                  />
                  <div className="bg-white border-[#00000033] border p-[13px_16px_13px_15px] flex justify-between items-center rounded-[10px] w-full">
                    <div className="flex gap-[9px] items-center">
                      <div className="bg-[#D9D9D94D] w-[34px] h-[34px] rounded-full flex justify-center items-center">
                        <Image
                          src={`${imageDomainUrl}/DrLisaPalmer/Icon/${item.type}.svg`}
                          alt={item.type}
                          height={18}
                          width={18}
                        />
                      </div>
                      <input
                        type="text"
                        value={item.value}
                        onChange={e => {
                          let newValue = e.target.value;
                          if (item.type === 'phone') {
                            newValue = newValue.replace(/[^0-9-]/g, '');
                          }

                          setItems(prevItems =>
                            prevItems.map(prevItem =>
                              prevItem.id === item.id ? { ...prevItem, value: newValue } : prevItem
                            )
                          );
                        }}
                        inputMode={item.type === 'phone' ? 'numeric' : 'text'}
                        pattern={item.type === 'phone' ? '[0-9]*' : undefined}
                        className="p-0 border-0 focus:border focus:border-[#0000004D] rounded-[4px] h-[26px] text-sm outline-none focus:p-[4px_9px]"
                        style={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          width: '100%',
                        }}
                        onFocus={e => (e.target.style.whiteSpace = 'normal')}
                        onBlur={e => (e.target.style.whiteSpace = 'nowrap')}
                      />
                    </div>
                    <button
                      onClick={() =>
                        setItems(prevItems => prevItems.filter(prevItem => prevItem.id !== item.id))
                      }
                    >
                      <Image
                        src={`${imageDomainUrl}/Profile/Icon/delete.svg`}
                        alt="delete"
                        height={18}
                        width={18}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setAddNewModal(true)}
            className="text-[#A850B2] text-sm font-medium leading-[17px] mt-[24px] w-fit flex gap-[9px]"
          >
            <Image
              src={`${imageDomainUrl}/Profile/Icon/plus.svg`}
              alt="plus"
              height={13}
              width={13}
            />
            Add New
          </button>
          <button onClick={saveItems} className="bg-[#A850B2] hover:bg-[#8e3f94] mt-[26px] rounded-[22px] h-[45px] text-[14px] font-semibold text-center leading-[17px] w-full text-white">
            Save
          </button>
        </div>
      </div>
      {addNewModal && (
        <div className="fixed inset-0 flex justify-center items-center z-10 ">
          <div
            onClick={() => setAddNewModal(false)}
            className="fixed inset-0 bg-black bg-opacity-50 h-screen"
          ></div>
          <div className="relative shadow-lg w-[287px] rounded-[14px]">
            <div className="bg-white w-full rounded-[11px] p-[23px_18.5px_21.5px_17px]">
              <h2 className="text-[#00000080] text-[22px] text-center mb-[14px] leading-[26px]">
                Select an option
              </h2>
              <div>
                {contactTypes.map(({ type, label }) => (
                  <button
                    key={type}
                    onClick={() => addNewItem(type as 'global' | 'email' | 'phone')}
                    className="w-full text-left border-b-[#00000033] border-b last:border-0"
                  >
                    <div key={type} className="flex items-center gap-[9px] p-[11px_8px_12.5px_8px]">
                      <Image
                        src={`${imageDomainUrl}/DrLisaPalmer/Icon/${type}.svg`}
                        alt={type}
                        height={18}
                        width={18}
                      />
                      <p className="text-sm font-semibold leading-[17px]">{label}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
