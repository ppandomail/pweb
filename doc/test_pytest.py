import pytest

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

@pytest.mark.usefixtures('class_setup')
class TestPythonOrgSearch:

    @pytest.fixture
    def class_setup(self):
        self.driver = webdriver.Chrome()
        yield
        self.driver.close()

    def test_search_in_python_org(self):
        self.driver.get('http://www.python.org')
        assert 'Python' in self.driver.title
        elem = self.driver.find_element(By.NAME, 'q')
        elem.clear()
        elem.send_keys('pycon')
        elem.send_keys(Keys.RETURN)
        assert 'No results found.' not in self.driver.page_source
