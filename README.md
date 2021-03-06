# Data Envelopment Analysis for Academic Social Network Analysis
##### Authors: 劉品君、許芸嘉、盧冠均
## 1 Abstract
Relationship between academic collaboration and research output has been topic of many researches. 

Past studies regarded it as a regression problem and proved the positive correlation. In the study, we view it as a production function problem. We took two measures of structural hole as input variables, weighted publication counts as the single output variable. 
We applied both Data Envelopment Analysis (DEA) and Stochastic Frontier Analysis (SFA) to estimate the production function. An empirical numerical example of Operational Research field was included. 

During the analysis, we represented the positive correlation as well as revealed more characteristics of the production function by breakdown overall efficiency into technical efficiency and scale efficiency. 

Results of the empirical example suggest research institutes should develop more irreplaceable collaboration relationship to boost their researh achievement. 

## 2 Motivation
Extant literatures applied various regression method to estimate the relation between academic collaboration and research output. The former’s positive effect toward the latter has already been proven. (Chen et al., 2008; Cantner and Rake, 2014; Gonzalez-Brambila et al., 2015)  

However, regression method requires strong assumption on statistical distribution of the function, which is a potential concern for us. Hence, we want to apply Data Envelopment Analysis (DEA) to avoid the risk. 

By applying data envelopment analysis on academic soial network, we provide managerial insights based on analysis results. 

Three contributions of this study:
* Constructed production function of research social network, which provides efficiency scores and managerial suggestion towards each institutes. 
* Applied data envelopment analysis on the scenario of research collaboration. This enables us to analyze efficiency without making strong assumption towards distribution of production function. 
* Focus on specific field to justify the relationship between collaboration and research accomplishment. 

## 3 Methodology
We apply Stochastic Frontier Analysis (SFA) and Data Envelopment Analysis (DEA) in our study. As for SFA, we use Cobb-Douglas Production Function, which can handle multiple inputs in its generalized form and handle different scales of production.

Below is the formulation of **Cobb-Douglas Production Function**:

* Let Y be the total production
* Let A be the total factor productivity
* Let L be the first input resource
* Let K be the second input resource
* Let $\alpha$ be the output elasticities of L
* Let $\beta$ be the output elasticities of K


<p align="center">
$Y = AL^{\alpha}K^{\beta}$
</p>

As for DEA, we apply two different models, which are input-oriented CRS DEA model and input-oriented VRS DEA model. With these two models, we can calculate the overall efficiency, technical efficiency and scale efficiency of each institute.

Below is the formulation of **input-oriented CRS DEA model**:

* Let $K$ be the set of the DMUs
* Let $I$ be the set of the inputs
* Let $O$ be the set of the outputs
* Let $X_{ik}$ be the $i^{th}$ input resource of DMU $k$,$\quad k \in K, i \in I$
* Let $Y_{jk}$ be the $j^{th}$ production output of DMU $k$,$\quad k \in K, j \in O$
* Let $v_{i}$ be the weight for the $i^{th}$ input resource,$\quad i \in I$
* Let $u_{j}$ be the weight for the $j^{th}$ production output,$\quad j \in O$


$$\begin{align*}
\max \quad		 & \sum_{j \in J}u_{j} Y_{jk} \\
\text{s.t.} \quad & \sum_{i \in I}v_{i} X_{ik} = 1 \\
                 & \sum_{j \in J}u_{j} Y_{jn} - \sum_{i \in I}v_{i} X_{in} \leq 0, \quad \forall n \in K \\
                 & v_{i} \geq \epsilon, \quad \forall i \in I \\
                 & u_{j} \geq \epsilon, \quad \forall j \in J
\end{align*}$$


Below is the formulation of **input-oriented VRS DEA model**:

* Let $K$ be the set of the DMUs
* Let $I$ be the set of the inputs
* Let $O$ be the set of the outputs
* Let $X_{ik}$ be the $i^{th}$ input resource of DMU $k$,$\quad k \in K, i \in I$
* Let $Y_{jk}$ be the $j^{th}$ production output of DMU $k$,$\quad k \in K, j \in O$
* Let $v_{i}$ be the weight for the $i^{th}$ input resource,$\quad i \in I$
* Let $u_{j}$ be the weight for the $j^{th}$ production output,$\quad j \in O$
* Let $u_{0}$ be the x-axis intercept that allow the frontier may not pass throught the original point


$$\begin{align*}
\max \quad		 & \sum_{j \in J}u_{j} Y_{jk} - u_0 \\
\text{s.t.} \quad & \sum_{i \in I}v_{i} X_{ik} = 1 \\
                 & \sum_{j \in J}u_{j} Y_{jn} - \sum_{i \in I}v_{i} X_{in} - u_0 \leq 0, \quad \forall n \in K \\
                 & v_{i} \geq \epsilon, \quad \forall i \in I \\
                 & u_{j} \geq \epsilon, \quad \forall j \in J
\end{align*}$$


## 4 Data Collection & Analysis
### 4.1 Data Collection
We take European Journal of Operational Research as our target publication to analysis the academic collaboration’s effect toward research output. We use crawler to collect papers basic information from Volumes 256 to 295, 120 issues in total. There are 4,786 rows and four columns in data, including paper title, author's name, author's affiliation and author sequence.

Then, data are transform into network. First, we align the granularity of each affiliations into the university. Second, delete nodes with zero degree centrality, which means delete the universities which did not collaborate with others in our data. The network is visualized in the link: https://network-visualization.vercel.app/. As we can see, National University of Singapore has 28 neighbors, which collaborates the most times, and is closed to the central of the network.

After that, we compute inputs and outputs for the production function. We pick two kinds of structural hole as our inputs: effective size and local constraint. For each node $u$, effective size is computed as $e(u) =  \displaystyle \sum_{v \in N(u)\setminus \set{u} } (1- \displaystyle\sum_{w \in N(v)} p_{uw} m_{vw})$, in our case, $m_{vw}$ always equal to one. Effective size shows how effective the node is. For example, if we take out this node, and find that its neighbors are still connected in the same network, then it means the node is less effective. While the definition of local constraint for two nodes $u$, $v$ is $l(u, v)=(p_{uv} + \displaystyle \sum_{w \in N(v)} p_{uw} p_{wv})^2$, so we define the local constraint of each node $u$ as $l(u) = (\displaystyle \sum_{w \in N(u)} p_{uw} p_{wu})^2$. Local constraint shows how important the node is to its neighbors. If its neightbor $v$ has a lot of neighbors, then the node $u$ is less important in this neighbor $v$'s view point.

As for outputs, we have weighted publications. To calculate weighted publications, the weight of first author's institute may be twice the weight of the other authors', and sum of weights for all the authors of a same paper should equal to one.

### 4.2 Analysis
Below are the scatter plots of the structure hole effective size, structure hole local constraint (input) and the weighted publication (output).

<img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/scatter%201.jpg" width="350" /> <img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/scatter%202.jpg" width="350" /> <br>

Below are the results of the SFA model, which are the technical efficiency of each institute and the frontier. <br>

<img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/sfa.jpg" width="350" /> <img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/sfa%20frontier.jpg" width="350" /> <br>

Below are the results of the DEA model, which are the overall efficiency, technical efficiency, scale efficiency of each institute. <br>

<img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/dea%201.jpg" width="350" /> <img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/dea%202.jpg" width="350" /> <img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/dea%203.jpg" width="350" />

## 5 Results & Conclusion
<img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/dea%20quadrant.png" width="350" />

In the above figure, institutes are classified into four quadrants. Institutes in quadrant one have both nice overall efficiency and technical efficiency. Especially The University of Queensland, Friedrich Schiller University Jena, and University of Seville, their overall efficiency is equal to one. For institutes lie in quadrant two, they have low technical efficiency but high scale efficiency, so they should focus on technology improvement. As for the institutes belong to quadrant three, they have both low technical efficiency and scale efficiency, so their technology and inputs scale should both be improved. At last, the institutes in quadrant four have high technical efficicency but low scale efficiency, they should first focus on adjusting their inputs scale to attain the most productivitive scale size.

Our school, National Taiwan University, has overall efficiency equals to 0.13, technical efficicency equals to 0.21, and scale efficiency equals to 0.62. It has low technical efficicency but high scale efficiency, which is belongs to quadrant two, so it should focus on improving technology first.


## 6. Reference

* [Do research institutes benefit from their network positions in research collaboration networks with industries or/and universities? Chen et al., 2008](https://sciencedirect.com/science/article/pii/S0166497217307836)
* [International research networks in pharmaceuticals: Structure and dynamics. Cantner and Rake, 2014](https://www.sciencedirect.com/science/article/abs/pii/S0048733313001959)
* [The impact of network embeddedness on research output. Gonzalez-Brambila et al., 2015](https://www.sciencedirect.com/science/article/abs/pii/S0048733313001248)
* https://js.cytoscape.org/
* https://networkx.org/documentation/stable/reference/algorithms/structuralholes.html
