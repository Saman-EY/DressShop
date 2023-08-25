import React from 'react';

const StoreSidebarHeader = ({header}) => {
    return (
        <div className='bg-Secondary text-slate-800 p-2 text-sm mb-3'>
            {header}
        </div>
    );
};

export default StoreSidebarHeader;