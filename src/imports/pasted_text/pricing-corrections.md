Apply ONLY the following corrections to the CURRENT Natal pricing section:

CEIA DE NATAL / LOTE ATUAL

Do NOT rebuild unrelated sections.
Do NOT modify sections above or below it.
Do NOT change any existing functionality.

Use the original desktop Figma at exactly 1920px width as the visual source of truth.

This section currently has structural differences from the original Figma.
Correct the STRUCTURE first, then refine the internal alignment and typography.


1. OUTER CARD — FULL CORAL BACKGROUND

The ENTIRE outer pricing card must have a solid CORAL background.

The coral background must extend across:

• the full width of the card
• the full height of the card
• the entire area behind both columns

IMPORTANT:

The current structure must NOT look like:

coral left column + independent white right column

and it must NOT look like:

coral left column + white right column + artificial coral footer strip

Instead, build the structure as:

ONE FULL CORAL OUTER CONTAINER

with

ONE WHITE INTERNAL PANEL positioned on top of the coral background on the right side.

The coral outer container must remain visible underneath the white panel.


2. WHITE “A EXPERIÊNCIA INCLUI” PANEL

The white panel on the right must be an INTERNAL element placed over the coral parent container.

It must NOT extend all the way to the bottom edge of the coral outer card.

There must be visible CORAL space underneath the white panel.

This coral area underneath the white panel is part of the SAME outer coral container.

Do NOT create a separate fake coral rectangle or footer strip underneath it.

The visual logic must be:

FULL CORAL PARENT
+
WHITE PANEL OVERLAY ON THE RIGHT


3. LEFT COLUMN — CONTENT

Preserve the existing content:

CEIA DE NATAL

LOTE ATUAL

LOTE X

R$ 000,00

por pessoa

+13% taxa

Do NOT rewrite any of this content.


4. LEFT CONTENT — VERTICAL POSITION

The left-side content is currently too high / top-heavy.

Treat all left-side information as ONE intentional content group.

Move this complete group slightly DOWN so it feels vertically balanced inside the coral area.

IMPORTANT:

Do NOT distribute each element independently across the entire height.

Do NOT use:

justify-content: space-between

to fill the column.

The internal relationship between:

CEIA DE NATAL
↓
LOTE ATUAL
↓
LOTE X
↓
R$ 000,00
↓
por pessoa
↓
+13% taxa

must remain intentional and visually connected.

The whole group should simply sit in a more vertically centered/balanced position.


5. LEFT CONTENT — HORIZONTAL ALIGNMENT

Keep the left-side information LEFT ALIGNED.

Do NOT center the text horizontally.

Match the original Figma for:

• left margin
• content width
• text alignment
• internal spacing


6. TYPOGRAPHY — LEFT SIDE

Copy the typography of each individual element from the original Figma.

Do NOT apply one generic style to all text.

Preserve the hierarchy between:

• CEIA DE NATAL
• LOTE ATUAL
• LOTE X
• price
• “por pessoa”
• “+13% taxa”

“LOTE X” uses the established decorative/display typography.

Do NOT replace “LOTE X” with Helvetica.

For the supporting sans-serif information, use the appropriate Helvetica weights from the original Figma.

Do NOT make everything Bold.


7. COLORS — LEFT SIDE

Match each text color individually from the original Figma.

Do NOT assume every element must use the same color just because the background is coral.

Use the exact original visual hierarchy.


8. RIGHT WHITE PANEL — CONTENT

Preserve the original:

A EXPERIÊNCIA INCLUI

heading and its complete checklist/content.

Do NOT rewrite, summarize or remove any item.

Restore the exact information hierarchy shown in the original Figma.


9. RIGHT PANEL — VERTICAL COMPOSITION

The content inside the white panel must feel intentionally balanced.

Use this visual flow:

A EXPERIÊNCIA INCLUI
↓
checklist/content
↓
FAÇA A SUA RESERVA

Do NOT push the heading to the top and the CTA to the very bottom using space-between.

The heading, checklist and CTA must read as ONE connected content group.

Match the original Figma for the vertical spacing between these elements.


10. RIGHT PANEL — TYPOGRAPHY

Use Helvetica for the sans-serif content.

Match the original Figma individually for:

• heading weight
• checklist weight
• font sizes
• line-height
• text colors
• spacing

Do NOT make the checklist unnecessarily bold.

Do NOT apply one generic typography style to the entire panel.


11. INTERNAL DIVIDER

If the original Figma contains a vertical divider inside this composition, preserve it and match its exact:

• position
• height
• thickness
• color

Do NOT add new decorative dividers that do not exist in the original.


12. “FAÇA A SUA RESERVA” BUTTON

Correct the CTA inside the white panel.

The exact label must remain:

FAÇA A SUA RESERVA

Use the corrected CTA typography system established throughout the landing page.

Use:

Helvetica

Do NOT use a condensed, decorative or display font for the button label.

Match the original Figma for:

• font weight
• font size
• letter spacing
• line-height
• uppercase treatment

Also match the original button for:

• width
• height
• internal padding
• border radius
• horizontal position
• vertical position
• background color
• text color

Do NOT make the button unnecessarily wider or taller.


13. CTA FUNCTIONALITY

Preserve the existing Natal reservation action.

The button must continue opening the Cassiano WhatsApp with the Natal reservation message.

Do NOT change:

• WhatsApp number
• WhatsApp message
• destination
• link behavior

Do NOT implement hover effects yet.


14. CARD PROPORTIONS

Match the overall card dimensions and proportions from the original desktop Figma.

Do NOT make the card excessively tall.

Do NOT add unnecessary min-height.

Do NOT create large empty spaces simply to vertically center content.

The original design is compact and intentional.


15. IMPORTANT STRUCTURAL CHECK

Before finishing, verify the bottom-right area of the card.

The correct result must show:

CORAL continuing underneath the white panel.

The white panel must finish BEFORE the bottom of the outer card.

If the bottom-right corner of the entire outer card is still white, the structure is incorrect.

If a separate coral rectangle was added underneath the white panel, the structure is also incorrect.

It must be ONE continuous coral parent background visible behind the white panel.


16. STRICT LIMITS

Do NOT modify:

• Natal hero
• buffet section
• Bebidas Inclusas
• Trilha da Noite
• Escolha Como Viver Essa Noite
• Ceia + Hospedagem section below
• Como Fazer Sua Reserva
• Momentos que Ficam
• carousel
• navigation
• Réveillon
• footer

This task is ONLY to correct the CEIA DE NATAL / LOTE ATUAL pricing card.

The final result must have:

1. one full coral outer container
2. one white internal panel on the right
3. coral visible underneath the white panel
4. no fake separate coral footer strip
5. vertically balanced left-side information
6. vertically balanced right-panel content
7. correct typography hierarchy
8. corrected Helvetica CTA typography
9. preserved Natal reservation functionality