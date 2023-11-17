import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		for(int tc=1;tc<=10;tc++) {
			int width = Integer.parseInt(br.readLine());
			int answer = 0;
			int[][] map = new int[100][100];
			
			for(int i=0;i<width;i++) { // 배열에 입력 담기
				st = new StringTokenizer(br.readLine());
				for(int j=0;j<width;j++) {
					map[i][j] = Integer.parseInt(st.nextToken());
				}
			}

			for(int i=0;i<width;i++) {
				int npole = 0;
				for(int j=0;j<width;j++) {
					if(map[j][i] == 2 & npole == 1) { // N극과 S극이 만났으므로 교착상태
						answer++;
						npole = 0;
					}
					else if(map[j][i] == 1) { // N극 자성체가 있음을 표시
						npole = 1;
					}
				}
			}
			sb.append("#"+tc+" "+answer+"\n");
		}
		System.out.print(sb);
	}
}