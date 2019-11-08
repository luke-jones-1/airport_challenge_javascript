feature 'Sign Up' do
  scenario 'User can view the sign-up page' do
    visit('/')
    click_button('Sign Up')
    expect(page).to have_content 'Sign up for Makers BNB'
  end

  scenario 'User can sign up to Makers BNB' do
    visit('/')
    click_button('Sign Up')
    fill_in('First Name', with: 'Will')
    fill_in('Last Name', with: 'Bath')
    fill_in('Email Address', with: 'a@b.c')
    click_button('Submit')
    expect(page).to have_content 'Thank you for signing up!'
  end

  # scenario 'User is denied signing up if email address is invalid' do
  #   visit('/')
  #   click_button('Sign Up')
  #   fill_in('First Name', with: 'Will')
  #   fill_in('Last Name', with: 'Bath')
  #   fill_in('Email Address', with: 'THIS IS NOT AN EMAIL')
  #   click_button('Submit')
  #   expect(page).to have_content('Your email address is invalid.')
  # end
  #
  # scenario 'User is denied signing up if any fields are left blank' do
  #   visit('/')
  #   click_button('Sign Up')
  #   fill_in('First Name', with: 'Will')
  #   fill_in('Last Name', with: 'Bath')
  #   # Leave Email Address blank
  #   click_button('Submit')
  #   expect(page).to have_content('One or more fields were left blank.')
  # end
end
