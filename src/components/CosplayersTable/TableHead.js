import React, { memo } from 'react';

export const TableHead = memo(({ fields }) => {
  const simplifiedFields = simplifyFieldsAdapted(fields);
  return (
    <thead>
      <tr>
        {simplifiedFields.map(field => (
          <th key={field}>{field.toUpperCase()}</th>
        ))}
      </tr>
    </thead>
  );
});

function simplifyFieldsAdapted(fields) {
  const { socials, ...textFields } = fields;
  const simplifiedSocials = socials.map(social => social.type);
  const simplifiedTextFields = Object.keys(textFields);
  const simplifiedFields = [...simplifiedTextFields, ...simplifiedSocials];
  return simplifiedFields;
}
