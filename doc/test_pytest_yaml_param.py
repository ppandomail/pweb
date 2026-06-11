import pytest

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from pyaml_env import parse_config

@pytest.mark.usefixtures('class_setup')
class TestPythonOrgSearch:

    datos = parse_config('data.yaml')

    @pytest.fixture
    def class_setup(self):
        self.driver = webdriver.Chrome()
        yield
        self.driver.close()
        
    @pytest.mark.parametrize('filtros', datos['search'].values())
    def test_search_in_python_org(self, filtros):
        self.driver.get(self.datos['url'])
        assert 'Python' in self.driver.title
        elem = self.driver.find_element(By.NAME, 'q')
        elem.clear()
        elem.send_keys(filtros['filtro'])
        elem.send_keys(Keys.RETURN)
        assert self.datos['expected'] not in self.driver.page_source
